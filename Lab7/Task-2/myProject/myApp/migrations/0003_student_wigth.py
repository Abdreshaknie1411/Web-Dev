# Generated by Django 5.1.7 on 2025-03-27 07:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myApp', '0002_student_gpa'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='wigth',
            field=models.FloatField(null=True),
        ),
    ]
