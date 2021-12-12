#!/bin/sh -l

echo "::debug ::Debug Message"
echo "::error ::Error Message"
echo "::warning ::Warning Message"


echo "::add-mask::$1"
echo "Hello $1"

time=$(date)

echo "::set-output name=time::$time"

echo "::group::Expendable Logs"
echo "some degub message"
echo "some degub message"
echo "some degub message"
echo "::endgroup::"

echo "::set-env name=Hello::hello"

