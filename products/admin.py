from django.contrib import admin

from .models import flavours


@admin.register(flavours)
class FlavourAdmin(admin.ModelAdmin):
    list_display = ("name", "is_available")
    list_filter = ("is_available",)
    search_fields = ("name",)
