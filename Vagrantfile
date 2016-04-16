# -*- mode: ruby -*-
# vi: set ft=ruby :

# Vagrantfile API/syntax version. Don't touch unless you know what you're doing!
VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(VAGRANTFILE_API_VERSION) do |config|
  # Every Vagrant virtual environment requires a box to build off of.
  config.vm.box = "ubuntu/trusty64"

  # add a bit more memory
  config.vm.provider "virtualbox" do |v|
     v.customize ["modifyvm", :id, "--memory", "2048"]
  end

  # use this config script on initial 'up' or --provision
  config.vm.provision "shell", path: "./scripts/setup.sh"
  
  # accessing "localhost:8080" will access port 80 on the guest machine.
  config.vm.network "forwarded_port", guest: 80, host: 8080
  config.vm.network "forwarded_port", guest: 8080, host: 8081

  # nfs for ember file watching
  # config.vm.network "private_network", ip: "192.168.33.11"
  # config.vm.synced_folder ".", "/vagrant", type: "nfs"

end
