from django.contrib import admin

from .models import JobOpening, JobApplication


@admin.register(JobOpening)
class JobOpeningAdmin(admin.ModelAdmin):

    list_display = (
        "title",
        "department",
        "location",
        "job_type",
        "experience",
        "last_date",
        "is_active",
        "created_at",
    )

    list_filter = (
        "job_type",
        "is_active",
        "location",
    )

    search_fields = (
        "title",
        "department",
        "location",
        "skills",
    )

    list_editable = (
        "is_active",
    )


@admin.register(JobApplication)
class JobApplicationAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "job",
        "email",
        "phone",
        "experience",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "job",
        "created_at",
    )

    search_fields = (
        "name",
        "email",
        "phone",
        "job__title",
    )

    list_editable = (
        "status",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )