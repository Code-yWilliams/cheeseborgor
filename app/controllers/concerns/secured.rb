module Secured
  extend ActiveSupport::Concern

  included do
    before_action :require_auth

    helper_method :current_user
    def current_user
      @current_user ||= User.find_by(email: session[:userinfo]["email"]) if session[:userinfo].present?
    end


    def require_auth
      redirect_to "/login" unless current_user.present?
    end
  end
end
