class LandingController < ApplicationController
  def index
    return redirect_to "/home" if session[:userinfo].present?

    render inertia: "Landing"
  end
end
