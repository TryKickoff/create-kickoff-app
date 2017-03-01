#!/bin/bash

# Duplicate Create React App packages and tasks
cp -R packages/create-react-app packages/create-kickoff-app
cp -R packages/react-scripts packages/kickoff-scripts
cp tasks/cra.sh tasks/cka.sh
cp tasks/replace-own-deps.js tasks/replace-kickoff-deps.js

# Replace references in Create Kickoff App package
find packages/create-kickoff-app -type f | xargs sed -i '' 's/create-react-app/create-kickoff-app/g'
find packages/create-kickoff-app -type f | xargs sed -i '' 's/react-scripts/kickoff-scripts/g'

# Replace references in Kickoff Scripts package
find packages/kickoff-scripts -type f | xargs sed -i '' 's/create-react-app/create-kickoff-app/g'
find packages/kickoff-scripts -type f | xargs sed -i '' 's/react-scripts/kickoff-scripts/g'

# Rename bin file
mv packages/kickoff-scripts/bin/react-scripts.js packages/kickoff-scripts/bin/kickoff-scripts.js

# Replace references in Create Kickoff App task
find tasks/cka.sh -type f | xargs sed -i '' 's/create-react-app/create-kickoff-app/g'
find tasks/cka.sh -type f | xargs sed -i '' 's/react-scripts/kickoff-scripts/g'
find tasks/cka.sh -type f | xargs sed -i '' 's/replace-own-deps/replace-kickoff-deps/g'

# Replace references in Replace Kickoff Deps task
find tasks/replace-kickoff-deps.js -type f | xargs sed -i '' 's/react-scripts/kickoff-scripts/g'

# Add Create Kickoff App command to package.json
sed -i '' $'s/cra.sh",/cra.sh",\\\n\t\t"create-kickoff-app": "tasks\/cka.sh",/g' package.json
