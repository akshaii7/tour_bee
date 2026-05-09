from rest_framework import serializers

class ContactSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField()
    phone = serializers.CharField(max_length=20)
    destination = serializers.CharField(max_length=100)
    message = serializers.CharField(style={'base_template': 'textarea.html'})
