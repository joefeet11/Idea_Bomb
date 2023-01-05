class Follow < ApplicationRecord
    belongs_to :follower, foreign_key: :follower_id, class_name: "User"
    belongs_to :followed_user, foreign_key: :followed_user_id, class_name: "User"

    validates :follower_id, uniqueness: {scope: [:followed_user_id]}
    

    def check_if_self
        if self.follower_id == self.followed_user_id 
            errors.add("Can't follow self.")
        end
    end
end
