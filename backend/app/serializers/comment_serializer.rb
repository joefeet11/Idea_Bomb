class CommentSerializer < ActiveModel::Serializer
  attributes :id, :content, :user_id
  belongs_to :idea
  belongs_to :user
end
