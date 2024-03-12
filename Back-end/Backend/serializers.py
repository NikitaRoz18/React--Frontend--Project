from rest_framework import serializers
from .models import*

class MachineSerializer(serializers.ModelSerializer):
    class Meta:
        model = Machine
        fields = '__all__'

class ProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Process
        fields = '__all__'

class MachineProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = MachineProcess
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class MaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = Material
        fields = '__all__'

class ProductProcess_Serializers(serializers.ModelSerializer):
    class Meta:
        model = ProductProcess
        fields = '__all__'

class ProductProcessSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductProcess
        fields = '__all__'

class ProcessMaterialSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductProcess
        fields = '__all__'