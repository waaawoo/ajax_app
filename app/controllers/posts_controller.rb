class PostsController < ApplicationController

  def index
    # @posts = Post.all
    # 降順表示にする
    @posts = Post.order(id: "DESC")
  end

  def new

  end

  def create
    # binding.pry
    # Post.create(content: params[:content])
    # 変数Postへメモの内容を格納 登録された内容を変数へ格納される
    post = Post.create(content: params[:content])
    # 投稿後にトップページへリダイレクトされるようにする
    # redirect_to action: :index
    # json形式で返却 joso{key: value}valueは格納された情報が入っている
    render json:{post: post}


  end
end
