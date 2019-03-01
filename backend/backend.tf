provider "aws" {
    access_key = "ACCESS_KEY_HERE"
    secret_key = "SECRET_KEY_HERE"
    region     = "eu-west-1"
}

resource "aws_instance" "test_instance" {
    ami           = "ami-2757f631"
    instance_type = "t2.micro"
}