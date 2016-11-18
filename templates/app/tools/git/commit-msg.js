#!/usr/bin/env node

/**
 * Git COMMIT-MSG hook for validating commit message
 * See https://docs.google.com/document/d/1rk04jEuGfk9kYzfqCuOlPTSJw3hEDZJTBN5E5f1SALo/edit
 *
 * Installation:
 * $ ln -s tools/git/commit-msg.js .git/hooks/commit-msg
 */

'use strict';

const fs  = require('fs'),
  util    = require('util');

const MAX_LENGTH  = 100,
  PATTERN         = /^(?:fixup!\s*)?(\w*)(\(([\w\$\.\*/-]*)\))?\: (.*)$/,
  IGNORED         = /^WIP\:/,
  TYPES           = {
    feat: true,
    fix: true,
    docs: true,
    style: true,
    refactor: true,
    perf: true,
    test: true,
    chore: true,
    revert: true
  };

let error = function () {
  let allowedTypes = [];

  for (let type in TYPES) {
    if (TYPES[type]) {
      allowedTypes.push(type);
    }
  }

  // gitx does not display it
  // http://gitx.lighthouseapp.com/projects/17830/tickets/294-feature-display-hook-error-message-when-hook-fails
  // https://groups.google.com/group/gitx/browse_thread/thread/a03bcab60844b812
  console.error('INVALID COMMIT MSG: ' + util.format.apply(null, arguments) + '.\nAllowed <type>: ' + allowedTypes.join(', '));
};

let validateMessage = function (message) {
  let isValid = true;

  if (IGNORED.test(message)) {
    console.log('Commit message validation ignored.');
    return true;
  }

  if (message.length > MAX_LENGTH) {
    error('is longer than %d characters !', MAX_LENGTH);
    isValid = false;
  }

  let match = PATTERN.exec(message);

  if (!match) {
    error('does not match "<type>(<scope>): <subject>" ! was: ' + message);
    return false;
  }

  let type = match[1];
  let scope = match[3];
  let subject = match[4];

  if (!TYPES.hasOwnProperty(type)) {
    error('"%s" is not allowed type !', type);
    return false;
  }

  // Some more ideas, do want anything like this ?
  // - allow only specific scopes (eg. fix(docs) should not be allowed ?
  // - auto correct the type to lower case ?
  // - auto correct first letter of the subject to lower case ?
  // - auto add empty line after subject ?
  // - auto remove empty () ?
  // - auto correct typos in type ?
  // - store incorrect messages, so that we can learn

  return isValid;
};


let firstLineFromBuffer = function (buffer) {
  return buffer.toString().split('\n').shift();
};

// Publish for testing
exports.validateMessage = validateMessage;

// Hacky start if not run by jasmine :-D
if (process.argv.join('').indexOf('jasmine-node') === -1) {
  let commitMsgFile = process.argv[2];
  let incorrectLogFile = commitMsgFile.replace('COMMIT_EDITMSG', 'logs/incorrect-commit-msgs');

  fs.readFile(commitMsgFile, function(err, buffer) {
    let msg = firstLineFromBuffer(buffer);

    if (!validateMessage(msg)) {
      fs.appendFile(incorrectLogFile, msg + '\n', function() {
        process.exit(1);
      });
    } else {
      process.exit(0);
    }
  });
}
