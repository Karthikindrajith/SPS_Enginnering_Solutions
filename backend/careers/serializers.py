from rest_framework import serializers
from .models import JobOpening, JobApplication


class JobOpeningSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobOpening
        fields = [
            "id",
            "title",
            "department",
            "location",
            "job_type",
            "experience",
            "qualification",
            "skills",
            "description",
            "last_date",
            "created_at",
            "updated_at",
        ]


class JobApplicationSerializer(serializers.ModelSerializer):

    class Meta:
        model = JobApplication
        fields = [
            "id",
            "job",
            "name",
            "email",
            "phone",
            "experience",
            "current_location",
            "message",
            "resume",
            "status",
            "created_at",
        ]

        read_only_fields = [
            "id",
            "status",
            "created_at",
        ]

    def validate_resume(self, resume):

        # 5 MB maximum
        max_size = 5 * 1024 * 1024

        if resume.size > max_size:
            raise serializers.ValidationError(
                "Resume size must be less than 5 MB."
            )

        allowed_extensions = [
            ".pdf",
            ".doc",
            ".docx",
        ]

        filename = resume.name.lower()

        if not any(
            filename.endswith(extension)
            for extension in allowed_extensions
        ):
            raise serializers.ValidationError(
                "Resume must be PDF, DOC or DOCX."
            )

        return resume