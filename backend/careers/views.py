from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
)

from rest_framework.parsers import (
    MultiPartParser,
    FormParser,
)

from .models import JobOpening, JobApplication

from .serializers import (
    JobOpeningSerializer,
    JobApplicationSerializer,
)


class JobOpeningListView(ListAPIView):

    serializer_class = JobOpeningSerializer

    def get_queryset(self):
        return JobOpening.objects.filter(
            is_active=True
        ).order_by("-created_at")


class JobOpeningDetailView(RetrieveAPIView):

    serializer_class = JobOpeningSerializer

    def get_queryset(self):
        return JobOpening.objects.filter(
            is_active=True
        )


class JobApplicationCreateView(CreateAPIView):

    queryset = JobApplication.objects.all()

    serializer_class = JobApplicationSerializer

    parser_classes = [
        MultiPartParser,
        FormParser,
    ]