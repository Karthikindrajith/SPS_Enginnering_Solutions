from django.db import models


class JobOpening(models.Model):

    JOB_TYPE_CHOICES = [
        ("Full Time", "Full Time"),
        ("Part Time", "Part Time"),
        ("Contract", "Contract"),
        ("Internship", "Internship"),
    ]

    title = models.CharField(max_length=200)

    department = models.CharField(
        max_length=150,
        blank=True
    )

    location = models.CharField(max_length=150)

    job_type = models.CharField(
        max_length=50,
        choices=JOB_TYPE_CHOICES,
        default="Full Time"
    )

    experience = models.CharField(
        max_length=100,
        blank=True
    )

    qualification = models.CharField(
        max_length=200,
        blank=True
    )

    skills = models.TextField(
        blank=True,
        help_text="Enter required skills"
    )

    description = models.TextField()

    last_date = models.DateField(
        null=True,
        blank=True
    )

    is_active = models.BooleanField(default=True)

    created_at = models.DateTimeField(auto_now_add=True)

    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title


class JobApplication(models.Model):

    STATUS_CHOICES = [
        ("New", "New"),
        ("Reviewed", "Reviewed"),
        ("Shortlisted", "Shortlisted"),
        ("Rejected", "Rejected"),
        ("Selected", "Selected"),
    ]

    job = models.ForeignKey(
        JobOpening,
        on_delete=models.CASCADE,
        related_name="applications"
    )

    name = models.CharField(max_length=150)

    email = models.EmailField()

    phone = models.CharField(max_length=20)

    experience = models.CharField(
        max_length=100,
        blank=True
    )

    current_location = models.CharField(
        max_length=150,
        blank=True
    )

    message = models.TextField(
        blank=True
    )

    resume = models.FileField(
        upload_to="resumes/"
    )

    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES,
        default="New"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.name} - {self.job.title}"