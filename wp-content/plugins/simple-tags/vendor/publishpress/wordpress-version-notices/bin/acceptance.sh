#!/bin/sh

bin/update-code-for-tests.sh

echo 'Running the acceptance tests'
echo '-------------------------------------------'
vendor/bin/codecept run acceptance