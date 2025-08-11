class LandingController < ApplicationController
  def index
    if current_user.present?
      return redirect_to current_user.username.present? ? current_user_home_path : :profile_setup
    end

    render inertia: "Landing"
  end
end
