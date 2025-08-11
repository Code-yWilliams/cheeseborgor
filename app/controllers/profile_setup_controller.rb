class ProfileSetupController < SecuredApplicationController
  def index
    return redirect_to current_user_home_path if current_user.setup_complete?

    render inertia: "ProfileSetup"
  end

  def create
    username = params["username"]
    if current_user.update(username:)
      redirect_to current_user_home_path
    else
      redirect_to :profile_setup, inertia: { errors: current_user.errors }
    end
  end
end
