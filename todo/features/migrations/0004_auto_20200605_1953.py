# Generated by Django 2.1 on 2020-06-05 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('features', '0003_auto_20200605_1228'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='Status',
            field=models.CharField(choices=[('New', 'New'), ('In Progress', 'In Progress'), ('Completed', 'Completed')], default='--', max_length=100),
        ),
    ]