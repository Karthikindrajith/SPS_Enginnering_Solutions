from rest_framework import serializers

from .models import Enquiry


class EnquirySerializer(serializers.ModelSerializer):

    class Meta:
        model = Enquiry

        fields = [
            "id",
            "company",
            "name",
            "email",
            "phone",
            "service",
            "location",
            "timeline",
            "facility",
            "message",
            "status",
            "created_at",
            "updated_at",
        ]

        read_only_fields = [
            "id",
            "status",
            "created_at",
            "updated_at",
        ]

    def validate_phone(self, value):
        phone = value.strip()

        if len(phone) < 10:
            raise serializers.ValidationError(
                "Please enter a valid phone number."
            )

        return phone