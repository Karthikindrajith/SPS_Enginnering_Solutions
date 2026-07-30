from django.contrib import admin
from .models import Enquiry


@admin.register(Enquiry)
class EnquiryAdmin(admin.ModelAdmin):

    list_display = (
        "name",
        "company",
        "phone",
        "email",
        "service",
        "status",
        "created_at",
    )

    list_filter = (
        "status",
        "service",
        "created_at",
    )

    search_fields = (
        "name",
        "company",
        "phone",
        "email",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )

    ordering = (
        "-created_at",
    )