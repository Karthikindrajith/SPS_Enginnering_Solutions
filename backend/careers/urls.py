from django.urls import path

from .views import (
    JobOpeningListView,
    JobOpeningDetailView,
    JobApplicationCreateView,
)


urlpatterns = [

    # GET
    # /api/careers/
    path(
        "",
        JobOpeningListView.as_view(),
        name="job-opening-list",
    ),

    # POST
    # /api/careers/apply/
    path(
        "apply/",
        JobApplicationCreateView.as_view(),
        name="job-application-create",
    ),

    # GET
    # /api/careers/1/
    path(
        "<int:pk>/",
        JobOpeningDetailView.as_view(),
        name="job-opening-detail",
    ),
]