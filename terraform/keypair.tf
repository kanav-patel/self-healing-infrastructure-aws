resource "aws_key_pair" "self_healing" {
  key_name   = "self-healing-key"
  public_key = file("C:/Users/HP/.ssh/self-healing-key.pub")
}