class Api::VotesController < ApplicationController
  def create
    @vote = Vote.new(vote_params)
    if !@vote.save
      render json: @vote.errors.full_messages, status: 404
    end
  end

  def destroy
    @vote = Vote.find(params[:id])
    @vote.destroy
  end

  private
  def vote_params
    params.require(:vote).permit(:user_id, :fragment_id)
  end
end
