resource "aws_autoscaling_group" "app_asg" {

  name = "self-healing-asg"

  desired_capacity = 1
  min_size         = 1
  max_size         = 2

  health_check_type = "EC2"

  vpc_zone_identifier = [
    aws_subnet.public.id,
    aws_subnet.public2.id
  ]

  launch_template {
    id      = aws_launch_template.app.id
    version = "$Latest"
  }

  tag {
    key                 = "Name"
    value               = "self-healing-instance"
    propagate_at_launch = true
  }
}