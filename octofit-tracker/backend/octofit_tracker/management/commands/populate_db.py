from django.core.management.base import BaseCommand

class Command(BaseCommand):
    help = 'Populate the octofit_db database with test data'

    def handle(self, *args, **kwargs):
        self.stdout.write("Populating database...")
        # Add your logic to create test data here
        self.stdout.write(self.style.SUCCESS("Successfully populated the database."))
