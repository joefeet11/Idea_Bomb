class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :password_digest 
    
    has_many :ideas, serializer: IdeaWithCommentsSerializer
    has_many :received_follows
    
   
  end