# Simple WordPress Scaffolding

Creates scaffolding for new WordPress projects quickly.  Will install the latest WordPress, fetched plugins, and fetched theme.  Includes database deployment.

## Dependencies
- Grunt
- Bower

## Fetched Plugins
- 404 Redirect
- Admin Menu Editor
- Advanced Custom Fields

## Fetched Theme
Uses the Bootstrap powered Starter Theme.  If you want to fetch your own theme, just change the repo URL in the Gruntfile.

## Usage
1. git clone ... into the project directory
2. Run npm install
3. Run grunt shell

That's it.

## Deploying databases

Uses grunt-deployment.  See ... for setup.

To use just run grunt deployment from the root directory