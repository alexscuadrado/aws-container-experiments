#! /bin/bash

# Helper functions

loop_files() {
    for i in $1/$2; do
        if [ -f "$i" ]; then
            echo "Replacing environment variables in file $i"
            replace_env_vars $i $3
        else
            echo "No .js files found in $SOURCE_DIR" && break
        fi
    done
}

replace_env_vars() {
    local -n arr=$2
    for i in "${!arr[@]}"
    do
        search=$i
        replace=${arr[$i]}
        sed -i "s~${search}~${replace}~g" $1
    done
}

# Main script

SOURCE_DIR="$1/static/js" # $1 should be build dir

declare -A env_vars

env_vars=(
    [%%ENV_MESSAGE_API_URL%%]=$ENV_MESSAGE_API_URL
)

if [ -d "$SOURCE_DIR" ]; then 
    loop_files $SOURCE_DIR '*.js' env_vars
else
    echo "WARNING: $SOURCE_DIR is not a directory. No environment variables will be replaced."
fi

echo "Starting nginx..."

nginx -g "daemon off;"
