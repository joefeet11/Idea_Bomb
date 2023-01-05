class FollowsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
    skip_before_action :authorized, only: :index

    def show
        following = User.find(params[:id]).followings
        render json: following, include: ['ideas', 'ideas.comments']
    end

    def create
        follow = Follow.create!(follow_params)
        render json: follow, status: :created 
    end

    def destroy
        follow = Follow.find_by(follower_id: params[:follower_id], followed_user_id: params[:followed_user_id]).destroy
        render json: follow
    end

    

    private

    def follow_params
        params.permit(:follower_id, :followed_user_id)
    end

    def record_not_found_response(exception)
        render json: {error: "User not found"}, status: :not_found 
    
    end

    def render_record_invalid(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
