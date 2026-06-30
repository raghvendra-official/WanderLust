variable "aws_region" {
  default = "eu-north-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "ami_id" {
  default = "ami-0aba19e56f3eaec05"
}

variable "key_name" {
  description = "Existing AWS EC2 Key Pair"
}