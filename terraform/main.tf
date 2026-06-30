module "network" {

  source = "./modules/network"

}

module "security_group" {

  source = "./modules/security-group"

  vpc_id = module.network.vpc_id

}

module "ec2" {

  source = "./modules/ec2"

  ami_id            = var.ami_id
  instance_type     = var.instance_type
  subnet_id         = module.network.subnet_id
  security_group_id = module.security_group.security_group_id
  key_name          = var.key_name

}

module "elastic_ip" {

  source = "./modules/elastic-ip"

  instance_id = module.ec2.instance_id

}