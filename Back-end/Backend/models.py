from django.db import models

class Machine(models.Model):
    name = models.CharField(max_length=100)
    code = models.CharField(max_length=20)

    def __str__(self):
        return self.name

class Process(models.Model):
    name = models.CharField(max_length=100)
    duration = models.IntegerField(default=0)

    def __str__(self):
        return self.name
    

class MachineProcess(models.Model):
    machine = models.ForeignKey(Machine, on_delete=models.CASCADE)
    process = models.ForeignKey(Process, on_delete=models.CASCADE)

    def __str__(self):
        return f"Machine :{self.machine} - Processes:{self.process}"
    
class Product(models.Model):
    product_name = models.CharField(max_length=100)
    product_code = models.CharField(max_length=100)
    def __str__(self):
        return self.product_name

class Material(models.Model):
    material_name = models.CharField(max_length=100)
    material_code = models.CharField(max_length=100)
    def __str__(self):
        return self.material_name
    
class ProductProcess(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    process = models.ForeignKey(Process, on_delete=models.CASCADE)

    def __str__(self):
        return f"Product:{self.product} - Processes:{self.process}"

class ProcessMaterial(models.Model):
    process_product = models.ForeignKey(ProductProcess, on_delete=models.CASCADE,null= True)
    material = models.ForeignKey(Material, on_delete=models.CASCADE)

    def __str__(self):
        return f"Material:{self.material} - Processes:{self.process_product}"