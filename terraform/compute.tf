resource "aws_launch_template" "app" {

  name_prefix = "self-healing-"

  image_id = data.aws_ami.ubuntu.id

  instance_type = "t3.micro"

  key_name = aws_key_pair.self_healing.key_name

  vpc_security_group_ids = [
    aws_security_group.app_sg.id
  ]

  iam_instance_profile {
    name = aws_iam_instance_profile.ec2_profile.name
  }

  user_data = base64encode(file("../scripts/user-data.sh"))

  tag_specifications {
    resource_type = "instance"

    tags = {
      Name = "self-healing-instance"
    }
  }
}