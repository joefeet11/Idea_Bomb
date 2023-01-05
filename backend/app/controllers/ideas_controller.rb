class IdeasController < ApplicationController
    skip_before_action :authorized, only: :index
    rescue_from ActiveRecord::RecordInvalid, with: :render_record_invalid
    def index
        render json: Idea.all
    end

    def create
        idea = Idea.create!(idea_params)
        render json: idea, status: :created 
    end

    def show
        idea = Idea.find(params[:id])
        render json: idea
    end

    def destroy 
        idea = Idea.find(params[:id]).destroy
        render json: idea
    end

    private

    def idea_params
        params.permit(:user_id, :detail)
    end


    def render_record_invalid(exception)
        render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
    end
end
