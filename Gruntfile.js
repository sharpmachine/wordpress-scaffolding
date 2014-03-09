module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    shell: {
      install_wordpress: {
        command: [
          'wget http://wordpress.org/latest.tar.gz',
          'tar xfz latest.tar.gz',
          'mv wordpress/* ./',
          'rmdir ./wordpress/',
          'rm -f latest.tar.gz'
        ].join('&&')
      },
      install_starter_theme: {
        command: 'git clone git@github.com:sharpmachine/starter-theme.git wp-content/themes/starter-theme'
      },
      install_wordpress_plugins: {
        command: [
          // 404 Redirected
          'svn checkout http://plugins.svn.wordpress.org/404-redirected/trunk/ wp-content/plugins/404-redirected',

          // Admin Menu Editor
          'svn checkout http://plugins.svn.wordpress.org/admin-menu-editor/trunk/ wp-content/plugins/admin-menu-editor',

          // Advanced Custom Fields
          'svn checkout http://plugins.svn.wordpress.org/advanced-custom-fields/trunk/ wp-content/plugins/advanced-custom-fields',

          // Broken Link Checker
          'svn checkout http://plugins.svn.wordpress.org/broken-link-checker/trunk/ wp-content/plugins/broken-link-checker',

          // Contact Form 7
          'svn checkout http://plugins.svn.wordpress.org/contact-form-7/trunk/ wp-content/plugins/contact-form-7',

          // Custompress
          'git clone git@github.com:sharpmachine/custompress.git wp-content/plugins/custompress',

          // Google Analytics for WordPress
          'svn checkout http://plugins.svn.wordpress.org/google-analytics-for-wordpress/trunk/ wp-content/plugins/google-analytics-for-wordpress',

          // Google Sitemap Generator
          'svn checkout http://plugins.svn.wordpress.org/google-sitemap-generator/trunk/ wp-content/plugins/google-sitemap-generator',

          // Jetpack
          'svn checkout http://plugins.svn.wordpress.org/jetpack/trunk/ wp-content/plugins/jetpack',

          // Maintenance Mode
          'svn checkout http://plugins.svn.wordpress.org/maintenance-mode/trunk/ wp-content/plugins/maintenance-mode',

          // Post Types Order
          'svn checkout http://plugins.svn.wordpress.org/post-types-order/trunk/ wp-content/plugins/post-types-order',

          // SEO Ultimate
          'svn checkout http://plugins.svn.wordpress.org/seo-ultimate/trunk/ wp-content/plugins/seo-ultimate',

          // W3 Total Cache
          'svn checkout http://plugins.svn.wordpress.org/w3-total-cache/trunk/ wp-content/plugins/w3-total-cache',

          // WP-DBManager
          'svn checkout http://plugins.svn.wordpress.org/wp-dbmanager/trunk/ wp-content/plugins/wp-dbmanager',
          ].join('&&')
      },
      install_bower_packages: {
        command: 'bower install'
      },
      setup_theme: {
        command: [
          // Remove default theme.less so we can we our own
          'rm wp-content/themes/starter-theme/bootstrap/less/theme.less',

          // Move less files from bootstrap less directory to theme root less directory
          'cp -Rf wp-content/themes/starter-theme/bootstrap/less/ wp-content/themes/starter-theme/less/',

          // Move js files from bootstrap js directory to theme root js directory
          'cp -Rf wp-content/themes/starter-theme/bootstrap/js/ wp-content/themes/starter-theme/js/',

          // Move font files from bootstrap font directory to theme root font directory
          'cp -Rf wp-content/themes/starter-theme/bootstrap/fonts wp-content/themes/starter-theme/fonts',

          // Create Vendor folder
          'mkdir wp-content/themes/starter-theme/js/vendor/',

          // Move holder.js from holderjs directory to js/vendor directory
          'cp -f wp-content/themes/starter-theme/holderjs/holder.js wp-content/themes/starter-theme/js/vendor/holder.js',

          // Move modernizr.js from modernizr directory to js/vendor directory
          'cp -f wp-content/themes/starter-theme/modernizr/modernizr.js wp-content/themes/starter-theme/js/vendor/modernizr.js',

          // Move selectivizr.js from selectivizr directory to js/vendor directory
          'cp -f wp-content/themes/starter-theme/selectivizr/selectivizr.js wp-content/themes/starter-theme/js/vendor/selectivizr.js',

          // Remove Bootstrap directory
          'rm -Rf wp-content/themes/starter-theme/bootstrap/',

          // Remove jquery directory
          'rm -Rf wp-content/themes/starter-theme/jquery/',

          // Remove holderjs directory
          'rm -Rf wp-content/themes/starter-theme/holderjs/',

          // Remove modernizr directory
          'rm -Rf wp-content/themes/starter-theme/modernizr/',

          // Remove selectivizr directory
          'rm -Rf wp-content/themes/starter-theme/selectivizr/',
          ].join('&&')
      }
    },
    deployments: {
      options: {
        backup_dir: "db_backups"
      },
      local: {
        title: "Local",
        database: "dbname",
        user: "root",
        pass: "root",
        host: "localhost",
        url: "localhost/project"
      },
      alpha: {
        title: "Alpha",
        database: "alpha_database_name",
        user: "alpha_database_user",
        pass: "y0ur_pa55w0rd",
        host: "localhost",
        url: "alpha.website.com",
        ssh_host: "root@yourdevserver.com"
      },
      beta: {
        title: "beta",
        database: "beta_database_name",
        user: "beta_database_user",
        pass: "y0ur_pa55w0rd",
        host: "localhost",
        url: "beta.website.com",
        ssh_host: "root@yourdevserver.com"
      },
      production: {
        title: "Production",
        database: "production_database_name",
        user: "production_database_user",
        pass: "y0ur_pa55w0rd",
        host: "localhost",
        url: "website.com",
        ssh_host: "root@yourproductionserver.com"
      }
    },
  });

  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-deployments');

};