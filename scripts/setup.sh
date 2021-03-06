#!/usr/bin/env bash

fail () {
  echo "$@" >&2
  exit 1
}

main () {
  update_package_list
  install_tools
  clean_up_packages
  install_bash_profile
  # install_nodejs
  # install_npm
  # symlink_node_to_nodejs
  install_node
  install_apache2
  configure_apache2
  restart_services
  install_foundation_cli
  install_gulp
  install_bower
  install_browserify
}

print_section () {
  local msg="$1"
  echo "************************************************************"
  echo "$msg"
  echo "************************************************************"
}

update_package_list () {
  print_section "Updating package list"
  sudo apt-get update
}

install_tools () {
  print_section "Installing good-to-have packages"
  sudo apt-get install -y \
    build-essential \
    git-core \
    vim \
    curl \
    ack-grep \
    wget \
    tree \
    || fail "Unable to install tools."
}

clean_up_packages () {
  print_section "Cleaning up packages"
  (sudo apt-get autoremove -y && sudo apt-get autoclean -y) \
  || fail "Unable to clean up packages"
}

install_bash_profile () {
  print_section "Installing .bash_profile"
  cp /vagrant/configs/.bash_profile /home/vagrant/.bash_profile
  chown vagrant:vagrant /home/vagrant/.bash_profile
}

## not used
install_nodejs () {
  print_section "Installing nodejs."
  sudo apt-get install nodejs -y || fail "Unable to install nodejs."
}

## not used
install_npm () {
  print_section "Installing node package manager [npm]."
  sudo apt-get install npm -y || fail "Unable to install npm."
}

## not used
symlink_node_to_nodejs () {
  print_section "Symlinking node command to nodejs package"
  sudo ln -s "$(which nodejs)" /usr/bin/node \
  || fail "Could not symlink to node" 
}

## here, there be dragons
install_node () {
  print_section "Installing Node.js"
  ## this is the reccomended way: https://nodejs.org/en/download/package-manager/
  curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash - || fail \
    "Unable to run scary nodejs installation script"
  sudo apt-get install nodejs -y || fail "Unable to install Node.js."
}

install_apache2() {
  print_section "Installing Apache2"
  sudo apt-get install -y apache2  || fail "Unable to install Apache2"
}

configure_apache2 () {
  print_section "Configure Apache2"
  sudo cp /vagrant/configs/002-front-end.conf /etc/apache2/sites-enabled/  \
    || fail "Unable to copy Apache config file."
  
  sudo a2dissite 000-default || fail "Unable to disable the default site." 

  sudo ln -s /vagrant /var/www/html/front-end || fail "Unable to link /vagrant to /var/www/html/front-end" 
}

restart_services () {
  print_section "Restart services"
  sudo service apache2 reload || fail "Could not reload apache2."
}

install_foundation_cli () {
  print_section "Installing foundation_cli"
  sudo npm install -g foundation-cli || fail "Unable to install foundation-cli"
}

install_gulp () {
  print_section "Installing Gulp"
  sudo npm install -g gulp || fail "Unable to install gulp"
}

install_bower () {
  print_section "Installing Bower"
  sudo npm install -g bower || fail "Unable to install bower"
}

install_browserify () {
  print_section "Installing Browserify for React"
  sudo npm install -g browserify || fail "Could not install browserify"
}

main "$@"
