from .models import  Movie, Role, Actor, Vote, Comment
from rest_framework import serializers

# class UserSerializer(serializers.HyperlinkedModelSerializer):
#     class Meta:
#         model = User
#         fields = ('id', 'email', 'types', 'name', 'lastName', 'phone', 'country', 'zip' )

class MovieSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.HyperlinkedRelatedField(
    #     view_name='user_details',
    #     read_only=True
    # )

    class Meta:
        model = Movie
        fields = ('id', 'name', 'image', 'description', 'budget')

class RoleSerializer(serializers.HyperlinkedModelSerializer):
    movie = serializers.HyperlinkedRelatedField(
        view_name='movie_details',
        read_only=True
    )

    class Meta:
        model = Role
        fields = ('id', 'movie', 'name', 'image', 'description', 'age', 'ethnicity', 'category')

class ActorSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.HyperlinkedRelatedField(
    #     view_name='user_details',
    #     read_only=True
    # )
    role = serializers.HyperlinkedRelatedField(
        view_name='role_details',
        read_only=True
    )

    class Meta:
        model = Actor
        fields = ('id', 'role', 'name', 'videoFile', 'image', 'resume')

class VoteSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.HyperlinkedRelatedField(
    #     view_name='user_details',
    #     read_only=True
    # )
    actor = serializers.HyperlinkedRelatedField(
        view_name='actor_details',
        read_only=True
    )

    class Meta:
        model = Vote
        fields = ('id', 'actor')

class CommentSerializer(serializers.HyperlinkedModelSerializer):
    # user = serializers.HyperlinkedRelatedField(
    #     view_name='user_details',
    #     read_only=True
    # )
    movie = serializers.HyperlinkedRelatedField(
        view_name='movie_details',
        read_only=True
    )
    role = serializers.HyperlinkedRelatedField(
        view_name='role_details',
        read_only=True
    )
    actor = serializers.HyperlinkedRelatedField(
        view_name='actor_details',
        read_only=True
    )

    class Meta:
        model = Comment
        fields = ('id', 'movie', 'role', 'actor', 'message')