from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.core.mail import send_mail
from django.conf import settings
from .serializers import ContactSerializer

class ContactAPIView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            # Extract data from validated serializer
            name = serializer.validated_data['name']
            email = serializer.validated_data['email']
            phone = serializer.validated_data['phone']
            destination = serializer.validated_data['destination']
            message = serializer.validated_data['message']

            # Prepare Email
            email_subject = f"New Contact Request from {name}"
            email_body = f"""
            You have received a new contact request from your website.
            
            Name: {name}
            Email: {email}
            Phone: {phone}
            Destination: {destination}
            
            Message:
            {message}
            """
            
            try:
                # Send email using SMTP settings from settings.py
                send_mail(
                    subject=email_subject,
                    message=email_body,
                    from_email=settings.EMAIL_HOST_USER,
                    recipient_list=[settings.EMAIL_HOST_USER], # Sending email to the site owner
                    fail_silently=False,
                )
                return Response(
                    {"success": "Your message has been sent successfully!"}, 
                    status=status.HTTP_200_OK
                )
            except Exception as e:
                # Handle email sending failure
                print(f"Failed to send email: {str(e)}")
                return Response(
                    {"error": f"Failed to send email. Error: {str(e)}"}, 
                    status=status.HTTP_500_INTERNAL_SERVER_ERROR
                )
        
        # Return validation errors if data is invalid
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
