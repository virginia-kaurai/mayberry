from django.urls import path
from .views import AdminCakeDetail, CreateCake, DeleteCake ,EditCake ,EditFlavour,DeleteFlavour,AdminFlavourDetail,Createflavour


app_name = "products"


urlpatterns = [
    path(
        "admin/cakedetail/<int:pk>/",
        AdminCakeDetail.as_view(),
        name="cakedetail"
    ),

    path(
        "admin/create/",
        CreateCake.as_view(),
        name="createcake"
    ),

    path(
        "admin/edit/cakedetail/<int:pk>/",
        AdminCakeDetail.as_view(),
        name="editcake"
    ),

    path(
        "admin/delete/<int:pk>/",
        DeleteCake.as_view(),
        name="deletecake"
    ),

    path(
            "admin/edit/<int:pk>/",
            EditCake.as_view(),
            name="editcake"
        ),

        path(
    "admin/flavourdetail/<int:pk>/",
    AdminFlavourDetail.as_view(),
    name="flavourdetail"
),

path(
    "admin/flavour/create/",
    Createflavour.as_view(),
    name="createflavour"
),

path(
    "admin/flavour/edit/<int:pk>/",
    EditFlavour.as_view(),
    name="editflavour"
),

path(
    "admin/flavour/delete/<int:pk>/",
    DeleteFlavour.as_view(),
    name="deleteflavour"
),
]