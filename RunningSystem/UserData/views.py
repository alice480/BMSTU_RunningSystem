from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import *


@api_view(['GET', 'POST'])
def users_list(request):
    if request.method == 'GET':
        data = User.objects.all()
        serializer = UserSerializer(data, context={'request': request}, many=True)
        return Response(serializer.data)
    else:
        print('post')
