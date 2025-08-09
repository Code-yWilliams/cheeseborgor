class LandingController < ApplicationController
  def index
    return redirect_to "/home" if current_user.present?

    render inertia: "Landing"
  end
end
