class SessionsController < ApplicationController
  def new
    redirect_to :root if session[:userinfo].present?
  end
end
