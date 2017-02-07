class FragmentsController < ApplicationController
  def create
    @fragment = Fragment.new(fragment_params)
    if !@fragment.save
      render json: @fragment.errors.full_messages, status: 404
    end
  end

  def index
    story_id = params[:story_id]
    @fragments = Fragment.where("story_id = ?", story_id).order_by(id: :asc)
  end

  private
  def fragment_params
    params.require(:fragment).permit(:user_id, :story_id, :body, :published)
  end
end
