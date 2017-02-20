class Api::StoriesController < ApplicationController
  def index
    if params[:featured]
      p 'featured'
      @stories = Story.limit(6).includes(:fragments, :users)
    else
      @stories = Story.includes(:fragments, :users).all
    end
  end

  def update
    @story = Story.find(params[:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 404
    end
  end

  private
  def story_params
    params.require(:story).permit(:title)
  end
end
