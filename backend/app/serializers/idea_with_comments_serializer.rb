class IdeaWithCommentsSerializer < ActiveModel::Serializer 
    attributes :id, :detail, :user_id
    belongs_to :user
    has_many :comments
end
