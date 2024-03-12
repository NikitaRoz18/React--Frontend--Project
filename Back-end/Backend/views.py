from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

class MachineView(APIView):

    def get(self, request, id=None):
        if id is None:
            machines = Machine.objects.all()
            serializer = MachineSerializer(machines, many=True)
            return Response(serializer.data)
        else:
            machine = Machine.objects.get(id=id)
            if machine:
                serializer = MachineSerializer(machine)
                return Response(serializer.data)
            else:
                return Response("Machine not found")

    def post(self, request):
        serializer = MachineSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    def patch(self, request, id):
        machine = Machine.objects.get(id=id)
        if machine:
            serializer = MachineSerializer(machine, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data)

    def delete(self, request, id):
        machine = Machine.objects.get(id=id)
        if machine:
            machine.delete()
        return Response("Machine deleted")


class ProcessView(APIView):

    def get(self, request, id=None):
        if id is None:
            processes = Process.objects.all()
            serializer = ProcessSerializer(processes, many=True)
            return Response(serializer.data)
        else:
            process = Process.objects.get(id=id)
            if process:
                serializer = ProcessSerializer(process)
                return Response(serializer.data)
            else:
                return Response("Process not found")

    def post(self, request):
        serializer = ProcessSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    def patch(self, request, id):
        process = Process.objects.get(id=id)
        if process:
            serializer = ProcessSerializer(process, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        return Response("Process not found")

    def delete(self, request, id):
        process = Process.objects.get(id=id)
        if process:
            process.delete()
            return Response("Process deleted")
        return Response("Process not found")


class MachineProcessView(APIView):

    def get(self, request, id=None):
        machine_process = MachineProcess.objects.all()
        print(machine_process)
        if machine_process:
            serializer = MachineProcessSerializer(machine_process,many = True)
            return Response(serializer.data)
        else:
            return Response("Machine process not found")
    
    
    def post(self, request):
        print(request.data)

        for x in request.data['machines']:

            new_mapping = MachineProcess(process_id = request.data['process'], machine_id = x)
            new_mapping.save()

        return Response("data saved")
        # serializer = MachineProcessSerializer(data=request.data)
        # if serializer.is_valid():
        #     serializer.save()
        # else:

        #     print(serializer.errors)
        # return Response(serializer.data)
    
    def patch(self, request, id):

        machine_process = MachineProcess.objects.get(id=id)
        machine_process_data = request.data

        for a in machine_process_data:
                if a['new']:
                    serializer = MachineProcessSerializer(data=a)
                    if serializer.is_valid():
                        serializer.save()
                elif a['delete']:
                    machine_process.delete()
                    return Response("Machine process deleted")
                elif a['update']:
                    serializer = MachineProcessSerializer(machine_process, data=a, partial=True)
                    if serializer.is_valid():
                        serializer.save()
                        return Response(serializer.data)

        return Response("Updated")

    def delete(self, request, id):
        machine_process = MachineProcess.objects.filter(id=id)
        if machine_process:
            machine_process.delete()
        return Response("Machine process deleted")
    
class ProductView(APIView):

    def get(self, request, id=None):
        if id is None:
            products = Product.objects.all()
            serializer = ProductSerializer(products, many=True)
            return Response(serializer.data)
        else:
            product = Product.objects.get(id=id)
            if product:
                serializer = ProductSerializer(product)
                return Response(serializer.data)
            else:
                return Response("Product not found")

    def post(self, request):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data) 

    def patch(self, request, id):
        product = Product.objects.get(id=id)
        if product:
            serializer = ProductSerializer(product, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data)

    def delete(self, request, id):
        product = Product.objects.get(id=id)
        if product:
            product.delete()
        return Response("Product deleted")  
    
class MaterialView(APIView):
    def get(self, request, id=None):
        if id is None:
            materials = Material.objects.all()
            serializer = MaterialSerializer(materials, many=True)
            return Response(serializer.data)
        else:
            material = Material.objects.get(id=id)
            if material:
                serializer = MaterialSerializer(material)
                return Response(serializer.data)
            else:
                return Response("Material not found")

    def post(self, request):
        serializer = MaterialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    def patch(self, request, id):
        material = Material.objects.get(id=id)
        if material:
            serializer = MaterialSerializer(material, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        return Response("Material not found")

    def delete(self, request, id):
        material = Material.objects.get(id=id)
        if material:
            material.delete()
            return Response("Material deleted")
        return Response("Material not found")



class ProductProcessView(APIView):
    def get(self, request, id=None):
        if id is None:
            product_processes = ProductProcess.objects.all()
            serializer = ProductProcessSerializer(product_processes, many=True)
            return Response(serializer.data)
        else:
            product_process = ProductProcess.objects.filter(id=id)
            if product_process:
                serializer = ProductProcessSerializer(product_process)
                return Response(serializer.data)
            else:
                return Response("ProductProcess not found")

    def post(self, request):
        serializer = ProductProcessSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    def patch(self, request, id):
        product_process = ProductProcess.objects.filter(id=id)
        if product_process:
            serializer = ProductProcessSerializer(product_process, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data)
        return Response("ProductProcess not found")

    def delete(self, request, id):
        product_process = ProductProcess.objects.filter(id=id)
        if product_process:
            product_process.delete()
            return Response("ProductProcess deleted")
        return Response("ProductProcess not found")


class ProcessMaterialView(APIView):
    def get(self, request, id=None):
        if id is None:
            process_materials = ProcessMaterial.objects.all()
            serializer = ProcessMaterialSerializer(process_materials, many=True)
            return Response(serializer.data)
        else:
            process_material = ProcessMaterial.objects.filter(id=id)
            if process_material:
                serializer = ProcessMaterialSerializer(process_material)
                return Response(serializer.data)
            else:
                return Response("ProcessMaterial not found")

    def post(self, request):
        serializer = ProcessMaterialSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
        return Response(serializer.data)

    def patch(self, request, id):
        process_material = ProcessMaterial.objects.filter(id=id)
        if process_material:
            serializer = ProcessMaterialSerializer(process_material, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        return Response("ProcessMaterial not found")

    def delete(self, request, id):
        process_material = ProcessMaterial.objects.filter(id=id)
        if process_material:
            process_material.delete()
            return Response("ProcessMaterial deleted")
        return Response("ProcessMaterial not found")


class ProductProcessReport(APIView):
    
    def get(self, request, id = None):
                
        product_details = ProductProcess.objects.filter(product_id = id)

        all_process = ProductProcess_Serializers(product_details,many = True).data
        
        process_count = product_details.count()

        product_process = {
            "total_orders" : process_count,
            "data": all_process
        }

        return Response(product_process)
    
# class MachinetoProcessView(APIView):

#     def get(self, request, id):

#         matched_id =[]

#         machine_process = MachineProcess.objects.filter(process_id=id)

#         machine_all = Machine.objects.all()

#         for x in machine_process:

#             matched_id.append(x.id)

#         for a in machine_all:

#             machine_data = MachineSerializer(a).data

#             if a.id in matched_id:
#                 machine_data["matched_machine"] = True
#             else:
#                 machine_data["matched_machine"] = False


        



        print(machine_process)
        if machine_process:
            serializer = MachineProcessSerializer(machine_process,many = True)
            return Response(serializer.data)
        else:
            return Response("Machine process not found")