from django.db import models


class Enquiry(models.Model):

    SERVICE_CHOICES = [
        ("steel_fabrication", "Steel Fabrication"),
        ("structural_erection", "Structural Erection"),
        ("peb_solutions", "PEB Solutions"),
        ("roofing_cladding", "Roofing & Cladding"),
        ("industrial_piping", "Industrial Piping"),
        ("other", "Other"),
    ]

    STATUS_CHOICES = [
        ("new", "New"),
        ("contacted", "Contacted"),
        ("in_progress", "In Progress"),
        ("closed", "Closed"),
    ]

    # Customer
    company = models.CharField(
        max_length=150,
        blank=True
    )

    name = models.CharField(
        max_length=100
    )

    email = models.EmailField()

    phone = models.CharField(
        max_length=20
    )

    # Project
    service = models.CharField(
        max_length=50,
        choices=SERVICE_CHOICES
    )

    location = models.CharField(
        max_length=150,
        blank=True
    )

    timeline = models.CharField(
        max_length=100,
        blank=True
    )

    facility = models.CharField(
        max_length=150,
        blank=True
    )

    message = models.TextField()

    # Admin
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="new"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    def __str__(self):
        return f"{self.name} - {self.get_service_display()}"

    class Meta:
        ordering = ["-created_at"]
        verbose_name = "Project Enquiry"
        verbose_name_plural = "Project Enquiries"