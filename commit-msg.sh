#!/usr/bin/env bash

error_msg="Aborting commit. Your commit message format needs to be corrected"
commit_message=$(cat $1)
check_commit_msg() {
  local REGEX='^\[((FEAT)|(FIX)|(REFACTOR)|(BEUI-[0-9]{0,3})|(BEUI-[0-9]{2,3}))\].+$'
  if [[ ! $commit_message =~ $REGEX ]]; then
    echo >&2 $error_msg
    echo your message: $commit_message
    exit 1
  fi
}

check_commit_msg
