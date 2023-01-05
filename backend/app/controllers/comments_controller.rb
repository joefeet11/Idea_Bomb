class CommentsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :record_not_found_response
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
    skip_before_action :authorized, only: :show
    def show
        idea = Idea.find(params[:id])
        render json: idea, serializer: IdeaWithCommentsSerializer
    end

    def create
        comment = Comment.create!(comment_params)
        render json: comment, status: :created 
    end

    def destroy 
        comment = Comment.find(params[:id]).destroy
        render json: comment
    end

    private

    def comment_params
        params.permit(:user_id, :content, :idea_id)
    end

    def record_not_found_response(exception)
        render json: {error: "Idea not found"}, status: :not_found 
    
    end

    def render_record_invalid(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
